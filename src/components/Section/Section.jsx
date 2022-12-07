import { Component } from 'react';
// import { nanoid } from 'nanoid'

export class Section extends Component {
    state = {
        contacts: [],
        name: ''
        }

        render () {
            return (
                <div>
                <h1>Phonebook</h1>
                <form>
                    <input  type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required/>
                    <button>Add contact</button>
                </form>

                <h2>Contacts</h2>
                <p></p>
                <p></p>
                <p></p>
            </div>
            )
            
        }
}