const db = require("../models");
const TicketType = db.ticketType;

// Controller function for an admin or manager to create a ticket
exports.createTicket = (req, res) => {
  const eventId = req.params.eventId;

  // Create a new ticket
  TicketType.create({
    eventId: eventId,
    price: req.body.price,
    type: req.body.type,
    userId: req.userId
  }).then(ticket => {
    // If the ticket is created successfully, return a success message
    res.send({ message: "Ticket was created successfully.", ticket: ticket });
  }).catch(err => {
    // If there is an error, return an error message
    res.status(500).send({ message: err.message });
  });
};

