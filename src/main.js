// Bootstrapping module
import ReactDOM    from 'react-dom';
import routes   from 'routes';

ReactDOM.render(routes, document.getElementById('content'));

// pt and checkT here only as a test of async and await. <3
function pt() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      let ahora = new Date().toString();
      console.log('timeout', ahora);
      resolve(ahora);
    },1000);
  });
}
async function checkT() {
  let startTime = new Date().toString();
  console.log(startTime);
  await pt();
  console.log('after', new Date().toString());
}

checkT();
