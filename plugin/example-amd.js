require(['popup'], function(popup){
  popup(document.getElementById('notFound'), 680, 500);
  popup(document.getElementById('share'), 680, 500);
  popup(document.querySelectorAll('#share a'), 680, 500);
});