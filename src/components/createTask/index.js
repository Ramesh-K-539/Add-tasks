import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  AppContainer,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  AddButton,
  TasksContainer,
  TagsList,
  Tags,
  TagButton,
  Tasks,
  Paragraph,
  NotFound,
  Cont,
  TasksLists,
  T,
} from './styledComponents'

class CreateTask extends Component {
  state = {
    tasksList: [],
    filteredLists: [],
    taskInput: '',
    tag: 'health',
    clickId: '',
    isActive: false,
    tagId: '',
  }

  onSubmitTask = event => {
    event.preventDefault()

    const {taskInput, tag, tagId} = this.state

    const uuid = uuidv4()

    if (taskInput !== '') {
      const object = {
        id: uuid,
        task: taskInput,
        tagId,
        tagText: tag,
      }

      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, object],
        taskInput: '',
        tag: '',
        tagId: '',
      }))
    }
  }

  enteringTask = event => {
    this.setState({taskInput: event.target.value})
  }

  selectingTag = event => {
    const {tagsList} = this.props
    const id = event.target.value
    const filterTag = tagsList.filter(each => each.optionId === id)[0]

    this.setState({tag: filterTag.displayText, tagId: id})
  }

  onFilterWithTag = id => {
    const {tasksList} = this.state

    const filteredList = tasksList.filter(each => each.tagId === id)

    this.setState(prevState => ({
      filteredLists: filteredList,
      clickId: id,
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {tagsList} = this.props
    const {
      taskInput,
      tag,
      tasksList,
      filteredLists,
      clickId,
      isActive,
      tagId,
    } = this.state
    const lists = isActive ? filteredLists : tasksList
    const isTrue = tasksList.length === 0
    console.log(tag)
    return (
      <AppContainer>
        <Form onSubmit={this.onSubmitTask}>
          <Heading color="#f3aa4e" size="35">
            Create a task
          </Heading>
          <Label margin="20" htmlFor="TASK">
            Task
          </Label>
          <Input
            id="TASK"
            type="text"
            placeholder="Enter the task here"
            onChange={this.enteringTask}
            value={taskInput}
          />
          <Label margin="45" htmlFor="TAGS">
            Tags
          </Label>
          <Select id="TAGS" value={tagId} onChange={this.selectingTag}>
            {tagsList.map(eachTag => (
              <Option key={eachTag.optionId} value={eachTag.optionId}>
                {eachTag.displayText}
              </Option>
            ))}
          </Select>
          <AddButton type="submit">Add Task</AddButton>
        </Form>
        <TasksContainer>
          <Heading color="#f8f8f8" size="25">
            Tags
          </Heading>
          <TagsList>
            {tagsList.map(each => (
              <Tags key={each.optionId}>
                <TagButton
                  bgColor={
                    each.optionId === clickId && isActive
                      ? '#f3aa4e'
                      : 'transparent'
                  }
                  type="button"
                  onClick={() => this.onFilterWithTag(each.optionId)}
                >
                  {each.displayText}
                </TagButton>
              </Tags>
            ))}
          </TagsList>
          <Heading color="#f8f8f8" size="25">
            Tasks
          </Heading>
          <TasksLists>
            {isTrue ? (
              <NotFound>No Tasks Added Yet</NotFound>
            ) : (
              lists.map(each => (
                <Tasks key={each.id}>
                  <T color="#f8f8f8" size="25">
                    {each.task}
                  </T>
                  <Cont>
                    <Paragraph>{each.tagText}</Paragraph>
                  </Cont>
                </Tasks>
              ))
            )}
          </TasksLists>
        </TasksContainer>
      </AppContainer>
    )
  }
}

export default CreateTask
