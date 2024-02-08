import { fetchResponses } from "../actions/data";

async function Responses() {
  // Fetch responses from your API
  const responses = await fetchResponses();

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((post, index) => (
            <tr key={post.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
              <td className="px-4 py-2">{post.firstName}</td>
              <td className="px-4 py-2">{post.lastName}</td>
              <td className="px-4 py-2">{post.email}</td>
              <td className="px-4 py-2">{post.phoneNumber}</td>
              <td className="px-4 py-2">{post.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Responses;
