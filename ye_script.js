(function (i, s, o, g, r, a, m) {
  i['YesElfApi'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.id = 'yesElf'; a.src = g; m.parentNode.insertBefore(a, m.nextSibling)
})
  (window, document, 'script', 'https://cloud.yeself.com:443/sdk/298b51f5-f6f2-410b-9981-7887808dd66c/app.js', 'yesElf');
yesElf('id', '298b51f5-f6f2-410b-9981-7887808dd66c');
yesElf('popups', true);
yesElf('segmentation', 'userId', 'testId');
yesElf('segmentation', 'roles', 'admin');
yesElf('segmentation', 'number', 5);
yesElf('segmentation', 'text', 'text');
yesElf('segmentation', 'date', '14/7/2001');