function handleClicks({changeType}) {
const handleClick = (e) => {
    const clickedDiv = e.target;
    const listDivs = document.querySelectorAll('.list1 > div, .list2 > div');

    // Remove 'clicked' class from all list divs
    listDivs.forEach(div => {
      div.classList.remove('clicked');
    });

    // Add 'clicked' class to the clicked div
    clickedDiv.classList.add('clicked');

    // Call changeType with the text content of the clicked div
    changeType(clickedDiv.textContent.toLowerCase());
  };

  const listDivs = document.querySelectorAll('.list1 > div, .list2 > div');

  // Add event listener to each list div
  listDivs.forEach(item => {
    item.addEventListener('click', handleClick);
  });

  // Select the 'ALL' div by default
  const allDiv = document.querySelector('.list1 > div:first-child');
  allDiv.classList.add('clicked');
  changeType('all');

  // Clean up event listeners when component unmounts
  return () => {
    listDivs.forEach(item => {
      item.removeEventListener('click', handleClick);
    });
  }
}
export default handleClicks;