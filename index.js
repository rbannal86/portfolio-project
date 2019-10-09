const menuExpand = function() {
  $('#nav-button').click(e => {
    $('#nav-links').toggleClass('hidden');
  });
};

const menuClose = function() {
  $('#nav-links').click(e => {
    $('#nav-links').toggleClass('hidden');
  });
};

// const projectExpand = function() {
//   $('#project-one').click(e => {
//     $('#content-one').toggleClass('hidden');
//   });
//   $('#project-two').click(e => {
//     $('#content-two').toggleClass('hidden');
//   });
//   $('#project-three').click(e => {
//     $('#content-three').toggleClass('hidden');
//   });
//   $('#project-four').click(e => {
//     $('#content-four').toggleClass('hidden');
//   });
// };


const main = function() {
  menuExpand();
  menuClose();
  // projectExpand();
};

$(main);