import React, { useState } from "react";

const review = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = review[index];

  // Next review
  const nextPerson = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex > review.length - 1) newIndex = 0;
      return newIndex;
    });
  };

  // Previous review
  const prevPerson = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) newIndex = review.length - 1;
      return newIndex;
    });
  };

  // Random review (different from current)
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * review.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % review.length;
    }
    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" />

      <h4 className="author" id={`author-${id}`}>
        {name}
      </h4>

      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div>
        <button className="prev-btn" onClick={prevPerson}>‹</button>
        <button className="next-btn" onClick={nextPerson}>›</button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </div>
  );
}
