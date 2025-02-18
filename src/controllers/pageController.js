export const home = (req, res) => {
  res.render('home', {
    title: 'Dinosaurs are awesome',
    content: 'Dinosarus are cool creatures',
  });
};
export const about = (req, res) => {
  res.render('default', {
    title: 'About us',
    content: 'We are a group of dinosaur enthousiusts',
  });
};
export const contact = (req, res) => {
  res.render('contact', {
    title: 'contact',
    content: 'contact us at 09 233 40 86',
  });
};
export const privacy = (req, res) => {
  res.render('default', {
    title: 'default',
    content: 'Dinos are protective of their privacy',
  });
};
