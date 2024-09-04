// import { TaskList } from "../components/task-list/task-list";
import { getParents} from "../helpers/other-helper";

const Tasks = [
  {
      type: 'project',
      id: 'F0',
      project: '',
      name: '',
      start: '',
      end: '',
      progress: 0
  },
  {
      type: 'project',
      id: 'F0F0',
      project: 'F0',
      name: '',
      start: '',
      end: '',
      progress: 0
  },
  {
    type: 'project',
    id: 'F0F0F0',
    project: 'F0F0',
    name: '',
    start: '',
    end: '',
    progress: 0
  },
  {
    type: 'task',
    id: 'F0F0F0T0',
    project: 'F0F0F0',
    name: '',
    start: '',
    end: '',
    progress: 0
  }
]


describe("hierarchical level", () => {
  it("hierarchical level 1", () => {
    const parents = getParents(Tasks, Tasks[0])
    expect(parents.length).toEqual (1)
  });

  it("hierarchical level 2", () => {
    const parents = getParents(Tasks, Tasks[1])
    expect(parents.length).toEqual (2)
  });

  it("hierarchical level 3", () => {
    const parents = getParents(Tasks, Tasks[2])
    expect(parents.length).toEqual (3)
  });

  it("hierarchical level 4", () => {
    const parents = getParents(Tasks, Tasks[3])
    expect(parents.length).toEqual (4)
  });
});
