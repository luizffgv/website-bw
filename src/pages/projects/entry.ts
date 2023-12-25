import projects, { ProjectRaw, Tag } from "projects-list";
import ProjectElement from "./components/project";
import { throwIfNull, trySpecify } from "@luizffgv/ts-conversions";
import "./styles.css?apply";

/** List of project filtering methods. */
const FILTERING_LOGICS = ["best-match", "every"] as const;
/** A project filtering method. */
type FilteringLogic = (typeof FILTERING_LOGICS)[number];

/**
 * Checks how many tags match between a {@link ProjectRaw | project} and a set
 * of {@link Tag | tags}.
 *
 * @param project - Project to check.
 * @param tags - Set of tags to check.
 * @returns Number of tags that are both in {@link project} and in {@link tags}.
 */
function matchingTags(project: ProjectRaw, tags: Set<Tag>): number {
  return project.tags?.filter((tag) => tags.has(tag)).length ?? 0;
}

/**
 * Compares two strings, ignoring casing differences.
 *
 * @param lhs - Left-hand side string.
 * @param rhs - Right-hand side string.
 * @returns Result of {@link String.localeCompare} of locale lowercase
 * {@link lhs} and locale lowercase {@link rhs}.
 */
function caseInsensitiveComparer(lhs: string, rhs: string): number {
  return lhs.toLocaleLowerCase().localeCompare(rhs.toLocaleLowerCase());
}

/**
 * Creates an HTML checkbox for toggling a tag for filtering.
 */
function createTagElement(tag: Tag) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = tag;

  const label = document.createElement("label");
  label.append(checkbox, document.createTextNode(tag));

  return label;
}

/**
 * Replaces the currently shown projects with the specified projects.
 *
 * @param projects - Projects to show.
 */
function showProjects(projects: ProjectElement[]) {
  const listItems = projects.map((project) => {
    const listItem = document.createElement("li");
    listItem.appendChild(project);
    return listItem;
  });

  elements.projectsList.replaceChildren(...listItems);
}

/**
 * Shows filtered projects given the specified tags and filtering logic.
 *
 * @param projects - Projects to filter.
 * @param requiredTags - Required tags.
 * @param logic - Filtering logic to use.
 */
function refreshProjects(
  projects: ProjectElement[],
  requiredTags: Set<Tag>,
  logic: FilteringLogic
) {
  projects = [...projects];

  if (requiredTags.size > 0)
    projects = projects.filter(
      ({ raw }) => matchingTags(throwIfNull(raw), requiredTags) > 0
    );

  projects.sort(
    ({ raw: a }, { raw: b }) =>
      matchingTags(throwIfNull(b), requiredTags) -
      matchingTags(throwIfNull(a), requiredTags)
  );

  if (logic == "every")
    projects = projects.filter(({ raw }) => {
      const tags = throwIfNull(raw?.tags);

      for (const tag of requiredTags) if (!tags.includes(tag)) return false;

      return true;
    });

  showProjects(projects);
}

const elements = {
  projectsList: throwIfNull(document.getElementById("projects-list")),
  tags: throwIfNull(document.getElementById("tags")),
  logics: throwIfNull(document.getElementById("logics")),
};

const projectElements = projects
  .sort(({ name: nameA }, { name: nameB }) =>
    caseInsensitiveComparer(nameA, nameB)
  )
  .map((project) => new ProjectElement().setProject(project));

const requiredTags = new Set<Tag>();

const tags = new Set(
  projects.flatMap((p) => p.tags).sort(caseInsensitiveComparer)
);

let filteringLogic: FilteringLogic = "best-match";

elements.tags.append(...[...tags].map((tag) => createTagElement(tag)));
elements.tags.addEventListener("input", ({ target }) => {
  const { checked, value: tag } = trySpecify(target, HTMLInputElement);

  if (checked) requiredTags.add(tag as Tag);
  else requiredTags.delete(tag as Tag);

  refreshProjects(projectElements, requiredTags, filteringLogic);
});

elements.logics.addEventListener("input", ({ target }) => {
  const { value } = trySpecify(target, HTMLInputElement);

  filteringLogic = value as FilteringLogic;

  refreshProjects(projectElements, requiredTags, filteringLogic);
});

showProjects(projectElements);
