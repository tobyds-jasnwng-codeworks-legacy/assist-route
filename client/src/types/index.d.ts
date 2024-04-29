export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  morningRoute: string;
  morningStop: string;
  eveningRoute: string;
  eveningStop: string;
  contactPerson1: string;
  contactPerson1Phone: string;
  contactPerson2: string;
  contactPerson2Phone: string;
  address: string;
  additionalInfo: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
};

export type Stop = {
  id: number, 
  name: string,
}

export type Route = {
  id: string,
  name: string,
  stops: Stop[],
  type: string,
}