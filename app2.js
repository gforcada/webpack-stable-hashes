
document.addEventListener('DOMContentLoaded', () => {
  console.log('app 2 calling');

  import(/* webpackChunkName: 'other2' */ './other2').then(
    ({ default: other2 }) => other2()
  );
});
