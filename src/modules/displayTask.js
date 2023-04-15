const displayTask = (Tasks, Element) => {
  let finalHtml = '';
  Tasks.forEach((Task) => {
    finalHtml += `
      <li>
        <div class="addTask">
          <input ${Task.completed ? 'checked' : ''} type="checkbox" class="completed-${Task.index}" />
          <input value="${Task.discription}" class="Task-item-each Task-item-i${Task.index}"/>
         
        <i class="material-icons dots more-option-${Task.index}">more_vert</i>
        <i class="material-icons delete delete-${Task.index}" style="display: none;">delete</i>
        
        </div>
      </li>
    `;
  });

  Element.innerHTML = finalHtml;
};

export default displayTask;
