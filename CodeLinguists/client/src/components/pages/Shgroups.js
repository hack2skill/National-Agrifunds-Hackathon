import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import AuthContext from '../../context/auth/authContext';
import YourGroup from './YourGroup';
import GroupInfo from './GroupInfo';
import ShgForm from './ShgForm';

import '../../assets/css/home.css';

const Shgroups = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [group, setGroup] = useState();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    authContext.loadUser();
  }, []);
  useEffect(() => {
    if (user) loadUserShg();
  }, [user]);

  const loadUserShg = async () => {
    try {
      if (!user) return;
      const res = await axios.get('/api/group');
      console.log(res);
      setGroups(res.data);
      res.data &&
        res.data.map((g) => {
          console.log(user.shgList, g._id);
          if (
            g.representative == user.name ||
            g.representative == user._id ||
            g.user == user._id ||
            g.phone === user.phone ||
            user.shgList.includes(g._id)
          )
            return setGroup(g);
        });
    } catch (err) {
      console.log(err);
    }
  };

  if (user) {
    // Show available SHG cards to join
    if (user.group.toLowerCase() === 'individual') {
      return <GroupInfo />;
    } else {
      if (!group) {
        // Show SHG form to create an SHG
        return <ShgForm />;
      } else {
        // Show joined SHG card
        return <YourGroup group={group} />;
      }
    }
  } else return <>Loading...</>;
};

export default Shgroups;
