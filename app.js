
document.addEventListener('DOMContentLoaded', () => {
  console.log('hi there');

  import(/* webpackChunkName: 'other' */ './other').then(
    ({ default: other }) => other()
  );
});
