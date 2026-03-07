async function load() {
  const headerRes = await fetch('/_components/header.html');
  const headerHtml = await headerRes.text();
  document.getElementById('header').innerHTML = headerHtml;

  const footerRes = await fetch('/_components/footer.html');
  const footerHtml = await footerRes.text();
  document.getElementById('footer').innerHTML = footerHtml;
}

load();