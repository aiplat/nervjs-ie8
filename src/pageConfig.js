let site = {
  name: 'AI智能空间',
  url: 'aiplat.com',
  href: 'http://aiplat.com',
  title: 'nervjs-ie8',
  keywords: 'AI智能空间,aiplat.com',
  description: 'AI智能空间,专注计算机软件技术',
  author: 'womendi@qq.com'
};
let des = {
  index: {
    title: '首页-' + site.title,
    keywords: site.keywords,
    description: site.description,
    author: site.author
  },
  apps: {
    title: '应用展示-' + site.title,
    keywords: site.keywords,
    description: site.description,
    author: site.author
  },
  donate: {
    title: '捐赠我们-' + site.title,
    keywords: site.keywords,
    description: site.description,
    author: site.author
  }
};

module.exports = des;
