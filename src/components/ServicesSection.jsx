import React from 'react';

const services = [
  {
    icon: 'ribbon-outline',
    title: 'Skilled Attorneys',
    description:
      'Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull',
  },
  {
    icon: 'scale-outline',
    title: 'Legal Defence',
    description:
      'Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull',
  },
  {
    icon: 'people-outline',
    title: '99% case win',
    description:
      'Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull',
  },
  {
    icon: 'scale-outline',
    title: 'Legal Defence',
    description:
      'Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull',
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-32 bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg py-14 px-6 text-center shadow-sm hover:shadow-md transition"
          >
            <ion-icon
              name={service.icon}
              class="text-5xl text-primary mb-4"
            ></ion-icon>
            <h3 className="text-lg font-semibold text-secondary mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
