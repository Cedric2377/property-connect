import React from 'react';

const properties = [
  { id: 1, title: 'Modern Apartment', location: 'New York', price: '$1200/month' },
  { id: 2, title: 'Cozy Cottage', location: 'Los Angeles', price: '$800/month' },
  { id: 3, title: 'Luxury Condo', location: 'San Francisco', price: '$2500/month' },
];

const PropertyList = () => {
  return (
    <div className="property-list">
      <h2>Property Listings</h2>
      <div className="property-cards">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

