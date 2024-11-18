interface IContact {
  name: string,
  phoneNumber: string,
  email: string,
  photo: string,
  id?: string,
}

interface IContactForm {
  name: string,
  phoneNumber: string,
  email: string,
  photo: string,
}

interface IContactAPI {
  [id: string]: IContact;
}