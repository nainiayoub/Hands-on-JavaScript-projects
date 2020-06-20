const context = {
    title: 'The Moroccan Vibe',
    body: '"The Moroccan vibe is the state of being surrounded by your fellow Moroccan friends with which you have had Moroccan tea sessions while discussing life, making jokes and debating random stuff."',
    link: 'Welcome!',
    instruments: [
        {
          image: 'https://idata.over-blog.com/1/50/59/42/calligraphies/P1120521.jpg',
          name: 'Guembri',
          description: 'Gimbri or Hejhouj, is a three stringed skin-covered bass plucked lute used by the Gnawa people. It is approximately the size of a guitar, with a body carved from a log and covered on the playing side with camel skin.',
          price: '$1,999.00',
          sale: '$1,699.89'
        },
        {
          image: 'https://i.pinimg.com/originals/a8/4b/47/a84b4784d596d58529b3e1bf37e0ba8e.jpg',
          name: 'Oud (عود)',
          description: 'The oud is a short-neck lute-type, pear-shaped stringed instrument with 11 or 13 strings grouped in 5 or 6 courses. The oud is very similar to modern lutes, and also to Western lutes.',
          price: '$599.99'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/%D0%94%D0%B0%D1%80%D0%B1%D1%83%D0%BA%D0%B0.jpg',
          name: 'Goblet drum',
          description: 'The goblet drum is a single head membranophone with a goblet shaped body used mostly in Egypt, also in parts of the Middle East, North Africa, South Asia, and Eastern Europe.',
          price: '$624.99'
        },
        {
          image: 'https://www.tribalvillage.com.au/wp-content/uploads/2019/11/3.jpg',
          name: 'Qraqueb (قراقب)',
          description: 'Krakebs (qraqeb), or garagab (Arabic: قراقب‎) are a large iron castanet-like musical instrument primarily used as the rhythmic aspect of Gnawa music. Gnawa is part of the North African culture and is inherent in the Maghrebi soundscape.',
          price: '$649.00',
          sale: '$349.00'
        }
    ]
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);

const compiledHTML = template(context);

const element = document.getElementById("information");

element.innerHTML = compiledHTML;