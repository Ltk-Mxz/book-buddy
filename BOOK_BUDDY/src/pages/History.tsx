import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const EXCHANGE_HISTORY = [
  {
    id: 1,
    date: "2024-03-15",
    status: "completed",
    with: "Emily Brown",
    givenBook: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    },
    receivedBook: {
      title: "1984",
      author: "George Orwell"
    }
  },
  {
    id: 2,
    date: "2024-02-28",
    status: "completed",
    with: "Michael Chen",
    givenBook: {
      title: "Brave New World",
      author: "Aldous Huxley"
    },
    receivedBook: {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger"
    }
  }
];

export default function History() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Exchange History</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exchange Partner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Books Exchanged
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {EXCHANGE_HISTORY.map((exchange) => (
                <tr key={exchange.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {new Date(exchange.date).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{exchange.with}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <span className="font-medium">{exchange.givenBook.title}</span>
                      <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                      <span className="font-medium">{exchange.receivedBook.title}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{exchange.givenBook.author}</span>
                      <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                      <span>{exchange.receivedBook.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {exchange.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}