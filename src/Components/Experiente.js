import React, { useState } from 'react';

function Experiente() {
      const [users, setUsers] = useState([
            { id: 1, mijlocTransport: 'Metrou', traseu: 'Piata Romana - Unirii', oraPlecare: '12:22', durataCalatorie: '7 min', gradAglomeratie: 'mediu', observatii: 'Nu imi place curatenia.', satisfactie: 'trist' },
            { id: 2, mijlocTransport: 'Metrou', traseu: 'Piata Romana - Unirii', oraPlecare: '12:22', durataCalatorie: '7 min', gradAglomeratie: 'mediu', observatii: 'Nu imi place curatenia.', satisfactie: 'trist' },
            { id: 3, mijlocTransport: 'Metrou', traseu: 'Piata Romana - Unirii', oraPlecare: '12:22', durataCalatorie: '7 min', gradAglomeratie: 'mediu', observatii: 'Nu imi place curatenia.', satisfactie: 'trist' },
            { id: 4, mijlocTransport: 'Metrou', traseu: 'Piata Romana - Unirii', oraPlecare: '12:22', durataCalatorie: '7 min', gradAglomeratie: 'mediu', observatii: 'Nu imi place curatenia.', satisfactie: 'trist' },
            { id: 5, mijlocTransport: 'Metrou', traseu: 'Piata Romana - Unirii', oraPlecare: '12:22', durataCalatorie: '7 min', gradAglomeratie: 'mediu', observatii: 'Nu imi place curatenia.', satisfactie: 'trist' }
      ]);

      return (
            <div className="container">
                  <h3 className="p-3 text-center">Experiente utilizatori</h3>
                  <table className="table-format">
                        <thead>
                              <tr>
                                    <th>Mijloc de transport</th>
                                    <th>Traseu</th>
                                    <th>Ora plecare</th>
                                    <th>Durata calatorie</th>
                                    <th>Gradul de aglomerare al mijlocului de transport</th>
                                    <th>Observații</th>
                                    <th>Nivelul de satisfacție</th>
                              </tr>
                        </thead>
                        <tbody>
                              {users && users.map(user =>
                                    <tr key={user.id}>
                                          <td>{user.mijlocTransport}</td>
                                          <td>{user.traseu}</td>
                                          <td>{user.oraPlecare}</td>
                                          <td>{user.durataCalatorie}</td>
                                          <td>{user.gradAglomeratie}</td>
                                          <td>{user.observatii}</td>
                                          <td>{user.satisfactie}</td>
                                    </tr>
                              )}
                        </tbody>
                  </table>
            </div>
      );
}

export default Experiente;