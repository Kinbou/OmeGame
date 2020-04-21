import slugify from 'react-slugify';

// Format date : dd/mm/yyyy à hh/mm
export const formatDate = (date, dateOnly = false) => {
  if (date === null || date === '') {
    return '';
  }

  const newDate = new Date(date);

  if (dateOnly) {
    return `${(`0${newDate.getDate()}`).slice(-2)}/${(`0${newDate.getMonth() + 1}`).slice(-2)}/${newDate.getFullYear()}`;
  }

  return `${(`0${newDate.getDate()}`).slice(-2)}/${(`0${newDate.getMonth() + 1}`).slice(-2)}/${newDate.getFullYear()} à ${(`0${newDate.getHours()}`).slice(-2)}h${(`0${newDate.getMinutes()}`).slice(-2)}`;
};

// Truncate long string
export const truncateText = (text, size = 25) => ((text.length > size) ? `${text.substr(0, size - 2)}..` : text);

// récupérer le slug qui correspond à un id d'une offre
export const slugifyId = (id) => slugify(id, {
  lower: true,
});

export const getOfferBySlug = (offers, slug) => {
  const offerIdFound = offers.find((offer) => {
    // on calcule le slug de la recette
    const slugForOfferId = slugifyId(offer.id, {
      lower: true,
    });

    // return true si c'est le bon élément, false sinon (find s'arrête au premier
    // élément qui correspond)
    return slug === slugForOfferId;
  });
  return offerIdFound;
};
