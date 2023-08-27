import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Avatar from '../../assets/logos/avatar2.png';
import '../../assets/css/requests.css';

const Requests = ({ shg_id }) => {
  const [requests, setRequests] = useState([]);

  const fetchAllRequests = async () => {
    try {
      const res = await axios.get(`/api/requests/${shg_id}`);
      setRequests(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllRequests();
  }, []);

  const changeStatus = async (id, status) => {
    const data = {
      status: status,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = axios.put(`/api/requests/${id}`, data, config);
      swal({
        title: 'Success',
        text: res.data.message,
        icon: 'success',
      });
      fetchAllRequests();
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(requests);

  return (
    <div className='requests-out'>
      {requests && requests.length > 0 ? (
        requests.map((req) => {
          return (
            <div className='requests-in'>
              <div className='requests-1 row'>
                <div className='col-sm-2'>
                  <img className='img-requests' src={Avatar}></img>
                </div>
                <div className='mid-req col-sm-4'>{req.user_id.name}</div>
                <div className='last-req col-sm-6'>
                  <button
                    className='btn-sbmt-11'
                    onClick={() => changeStatus(req._id, 'accepted')}
                  >
                    Accept
                  </button>
                  <button
                    className='btn-sbmt-12'
                    onClick={() => changeStatus(req._id, 'dismissed')}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>No requests to display!</>
        // <div className='requests-in'>
        //   <div className='requests-1 row'>
        //     <div className='col-sm-2'>
        //       <img className='img-requests' src={Avatar}></img>
        //     </div>
        //     <div className='mid-req col-sm-4'>Mansi Gulati</div>
        //     <div className='last-req col-sm-6'>
        //       <button className='btn-sbmt-11'>Accept</button>
        //       <button className='btn-sbmt-12'>Reject</button>
        //     </div>
        //   </div>

        //   <div className='requests-1 row'>
        //     <div className='col-sm-2'>
        //       <img className='img-requests' src={Avatar}></img>
        //     </div>
        //     <div className='mid-req col-sm-4'>Gracy Singh</div>
        //     <div className='last-req col-sm-6'>
        //       <button className='btn-sbmt-11'>Accept</button>
        //       <button className='btn-sbmt-12'>Reject</button>
        //     </div>
        //   </div>

        //   <div className='requests-1 row'>
        //     <div className='col-sm-2'>
        //       <img className='img-requests' src={Avatar}></img>
        //     </div>
        //     <div className='mid-req col-sm-4'>Taesha Mendiratta</div>
        //     <div className='last-req col-sm-6'>
        //       <button className='btn-sbmt-11'>Accept</button>
        //       <button className='btn-sbmt-12'>Reject</button>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default Requests;
