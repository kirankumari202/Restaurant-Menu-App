import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

const Order = ({ total, orders, persons, setPersons }) => {
  console.log(persons);
  return (
    <div className="card col-md-4">
      <div className="card-header">Select Meals</div>
      <div className="px-4 py-2 d-flex justify-content-between">
        <p className="text-bold">Add person</p>
        <button
          onClick={() => {
            setPersons((prev) => [
              ...prev,
              {
                name: `person-${prev.length + 1}`,
                id: `${Math.random()}`,
                orders: [],
                selected: false,
              },
            ]);
          }}
          className="btn btn-info text-white d-flex justify-content-center align-content-center"
        >
          +
        </button>
      </div>
      {persons.length === 0 && (
        <div className="px-4 py-2"> No person selected </div>
      )}

      {persons.length > 0 &&
        persons.map((item, index) => {
          return (
            <Accordion defaultActiveKey={persons[0]?.id}>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <div
                    className="d-flex justify-content-between w-100 align-items-center pr-4"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <p className="mb-0">{item.name}</p>{" "}
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={({ target: { checked } }) => {
                          setPersons((prev) => {
                            const persons = prev.map((person) => {
                              return person.id === item.id
                                ? {
                                    ...person,
                                    selected: checked,
                                  }
                                : person;
                            });
                            return persons;
                          });
                        }}
                      />
                    </div>
                    <span className="text-danger">delete</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {item.orders.length === 0 && <div>No orders selected</div>}
                  {item.orders.length > 0 && (
                    <ListGroup>
                      {item.orders.map((item) => {
                        return (
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <span>{item.title}</span>
                              <span>$ {item.price}</span>
                            </div>
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}

      <div className="text-right pt-4">
        <p>
          Total: <strong>${total}</strong>{" "}
        </p>
      </div>
      <div className="text-right card-header">
        <a className="btn btn-primary text-white">Save</a>
      </div>
    </div>
  );
};

export default Order;
