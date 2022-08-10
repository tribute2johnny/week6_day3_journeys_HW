const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map(journey => {
      return journey.startLocation;
    });
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(journey => {
      return journey.endLocation;
    });

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journey = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
    return journey

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    const distanceMatch = this.journeys.filter((journey) => {
      return journey.distance > minDistance;
    })
      return distanceMatch
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let result = this.journeys.map((journey) => {
    return journey.transport
  });
  let uniqueTransport = new Set(result);
  return Array.from(uniqueTransport)
  
  
};


module.exports = Traveller;
