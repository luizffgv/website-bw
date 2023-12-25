import lerp from "Scripts/lerp";
import { CURSOR_INDEX } from "Scripts/z-indexes";

/** Represents a 2D point. */
interface Point2D {
  /** The horizontal position of the point. */
  x: number;

  /** The vertical position of the point. */
  y: number;
}

/**
 * Finds the center of a {@link DOMRect | rectangle}.
 *
 * @param rect - Rectangle to find the center of.
 * @returns Center of the rectangle.
 */
function center(rect: DOMRect): Point2D {
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

/** Location of the real system cursor. */
const realCursorPosition = { x: 0, y: 0 };

addEventListener("mousemove", ({ x, y }) => {
  [realCursorPosition.x, realCursorPosition.y] = [x, y];
});

/** A dynamic stylized cursor that reacts and adapts to the page elements. */
class Cursor {
  /** Default cursor radius. */
  static RADIUS_PX = 24;

  /** Wrapped HTML element. */
  #element: HTMLElement;

  /** A callback that should be used for transitioning cursor positions. */
  #positionTransitionCallback: ((deltaTimeMs: number) => void) | null = null;

  /** The CSS `border-radius` of the cursor. */
  set #borderRadius(radius: number) {
    this.#element.style.borderRadius = `${radius}px`;
  }

  /** The CSS `width` of the cursor. */
  get #width(): number {
    return Number.parseInt(this.#element.style.width);
  }

  set #width(width: number) {
    this.#element.style.width = `${width}px`;
  }

  /** The CSS `height` of the cursor. */
  get #height(): number {
    return Number.parseInt(this.#element.style.height);
  }

  set #height(height: number) {
    this.#element.style.height = `${height}px`;
  }

  /** The CSS `left` and `top` positions of the cursor. */
  get #position(): { x: number; y: number } {
    return {
      x: Number.parseFloat(this.#element.style.left),
      y: Number.parseFloat(this.#element.style.top),
    };
  }

  set #position({ x, y }: { x: number; y: number }) {
    [this.#element.style.left, this.#element.style.top] = [`${x}px`, `${y}px`];
  }

  constructor() {
    this.#element = document.createElement("div");

    this.#element.style.backgroundColor = "white";
    this.#element.style.boxSizing = "border-box";
    this.#borderRadius = Cursor.RADIUS_PX;
    this.#element.style.mixBlendMode = "difference";
    this.#element.style.pointerEvents = "none";
    this.#element.style.position = "fixed";
    this.#element.style.translate = "-50% -50%";
    [this.#width, this.#height] = [Cursor.RADIUS_PX * 2, Cursor.RADIUS_PX * 2];
    this.#element.style.transitionDuration = "150ms";
    this.#element.style.transitionTimingFunction = "ease-out";
    this.#element.style.transitionProperty =
      "border, border-radius, scale, width, height, background-color";
    this.#element.style.zIndex = String(CURSOR_INDEX);

    this.#position = { x: -Cursor.RADIUS_PX, y: -Cursor.RADIUS_PX };

    addEventListener(
      "mousemove",
      ({ x, y }) => {
        // The first real cursor movement initializes the virtual cursor's
        // position.
        this.#position = { x, y };

        addEventListener("mousemove", ({ x, y }) => {
          // Further cursor movements only update the cursor position if there's
          // nothing else possibly updating it.
          if (this.#positionTransitionCallback == null)
            this.#position = { x, y };
        });
      },
      { once: true }
    );

    addEventListener("focusin", ({ target }) => {
      if (!(target instanceof HTMLElement)) return;

      // Avoid handling element if it's missing :focus-visible, as it was likely
      // focused by click interaction, therefore the element was already handled
      // by hover and this might override the on hover behavior.
      if (target.matches(":focus-visible"))
        // We wait for the next frame so the screen scrolls to the focused
        // element.
        requestAnimationFrame(() => this.#handleElement(target, "focus"));
    });

    addEventListener("mouseover", ({ target }) => {
      if (!(target instanceof HTMLElement)) return;

      this.#handleElement(target);
    });

    addEventListener(
      "scrollend",
      () => {
        if (Number.isNaN(this.#position.x) || Number.isNaN(this.#position.y))
          return;

        const target = document.elementFromPoint(
          this.#position.x,
          this.#position.y
        );

        if (target instanceof HTMLElement) this.#handleElement(target);
      },
      { capture: true }
    );

    document.body.appendChild(this.#element);

    let lastTimstamp = performance.now();
    const positionTransitionWrapper = () => {
      requestAnimationFrame(positionTransitionWrapper);

      let currentTimestamp = performance.now();
      let deltaTimeMs = currentTimestamp - lastTimstamp;
      lastTimstamp = currentTimestamp;

      this.#positionTransitionCallback?.(deltaTimeMs);
    };
    requestAnimationFrame(positionTransitionWrapper);
  }

  /**
   * Interpolates the cursor position from its current position to the target
   * position.
   *
   * @remarks
   *
   * Locks the cursor position after the target is reached, until the callback
   * is manually unset.
   *
   * @param target - Target cursor position.
   */
  #interpolateTo(target: Point2D) {
    this.#positionTransitionCallback = (deltaTimeMs) => {
      const { x, y } = this.#position;

      this.#position = {
        x: lerp(x, target.x, 0.015 * deltaTimeMs),
        y: lerp(y, target.y, 0.015 * deltaTimeMs),
      };
    };
  }

  /**
   * Interpolates the cursor element position to the real cursor position, until
   * they are equal.
   */
  #interpolateToRealCursor() {
    this.#positionTransitionCallback = (deltaTimeMs) => {
      const { x, y } = this.#position;

      if (
        Math.round(x) == realCursorPosition.x &&
        Math.round(y) == realCursorPosition.y
      ) {
        this.#positionTransitionCallback = null;
        return;
      }

      this.#position = {
        x: lerp(x, realCursorPosition.x, 0.015 * deltaTimeMs),
        y: lerp(y, realCursorPosition.y, 0.015 * deltaTimeMs),
      };
    };
  }

  /**
   * Modifies the cursor element based on the currently hovered or focused
   * element.
   *
   * @param element - Element to check.
   * @param mode - Whether the element was hovered or focused.
   */
  #handleElement(element: HTMLElement, mode: "hover" | "focus" = "hover") {
    const targetRect = element.getBoundingClientRect();

    this.#element.style.backgroundColor = "white";
    this.#element.style.border = "none";
    this.#borderRadius = Cursor.RADIUS_PX;
    this.#element.style.outline = "none";
    [this.#width, this.#height] = [Cursor.RADIUS_PX * 2, Cursor.RADIUS_PX * 2];

    switch (element.tagName) {
      case "HTML": {
        if (this.#positionTransitionCallback != null)
          this.#interpolateToRealCursor();

        break;
      }

      case "A": {
        const padding = {
          horizontal: element.classList.contains("button") ? 0 : 4,
          vertical: 0,
        } as const;

        [this.#width, this.#height] = [
          targetRect.width + padding.horizontal,
          targetRect.height + padding.vertical,
        ];
        this.#borderRadius = 0;

        this.#interpolateTo(center(targetRect));

        break;
      }

      case "BUTTON": {
        ({ width: this.#width, height: this.#height } = targetRect);
        this.#borderRadius = 0;

        this.#interpolateTo(center(targetRect));

        break;
      }

      case "H1": {
        [this.#width, this.#height] = [targetRect.width, 2];
        this.#borderRadius = 0;

        const { x: cx } = center(targetRect);

        this.#interpolateTo({ x: cx, y: targetRect.bottom });

        break;
      }

      case "H2": {
        [this.#width, this.#height] = [targetRect.width, 2];
        this.#borderRadius = 0;

        const { x: cx } = center(targetRect);

        this.#interpolateTo({ x: cx, y: targetRect.bottom });

        break;
      }

      case "LABEL": {
        if (element.querySelector('input[type="checkbox"]')) {
          // Only stick to center if the element was focused by keyboard to
          // avoid confusing cursor motion.
          if (mode == "focus") {
            ({ width: this.#width, height: this.#height } = targetRect);

            this.#element.style.outline = "2px solid white";
            this.#borderRadius = 0;
            this.#element.style.backgroundColor = "transparent";

            this.#interpolateTo(center(targetRect));
          } else {
            [this.#width, this.#height] = [Cursor.RADIUS_PX, Cursor.RADIUS_PX];
          }
        }

        break;
      }

      case "P": {
        [this.#width, this.#height] = [8, 16];
        this.#borderRadius = 0;

        this.#interpolateToRealCursor();

        break;
      }

      case "X-PROJECT": {
        [this.#width, this.#height] = [Cursor.RADIUS_PX, Cursor.RADIUS_PX];

        if (this.#positionTransitionCallback != null)
          this.#interpolateToRealCursor();
        break;
      }

      default: {
        // Walk up the DOM tree until a handleable parent is found.

        if (element.parentElement == null)
          throw new Error("Element has no parent and is not <html>");

        this.#handleElement(element.parentElement, mode);

        break;
      }
    }
  }
}

new Cursor();
