
document.addEventListener('DOMContentLoaded', function() {
  // 添加興趣
  const interests = ['聽歌', '滑冰', '跳舞'];
  
  const interestsList = document.getElementById('interests-list');
  interests.forEach(interest => {
    const interestElement = document.createElement('p');
    interestElement.textContent = interest;
    interestsList.appendChild(interestElement);
  });

  // 添加專案
  const projects = [
    {
      title: '專案一',
      description: '這是一個示範專案'
    }
  ];

  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectsList.appendChild(projectElement);
  });
});

