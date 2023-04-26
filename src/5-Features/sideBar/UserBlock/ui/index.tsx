import Box from '@mui/material/Box';
import s from './index.module.scss';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoader } from '../../../../6-Entities/Common/model/hooks';
import SetAlert from '../../../../7-Shared/lib/SetAlert';
import SkeletonComp from '../../../../7-Shared/lib/Skeleton';
import Photo from './../../../../7-Shared/data/mocks/data/img/photo.jpg';

interface IUserBlock {}

const UserBlock: React.FC<IUserBlock> = (props) => {
  const [isFetch, isLoad, error] = useLoader(
    'Ошибка загрузки фото',
    SetAlert,
    async () => {
      const userPhoto = await axios.get('/photo');
    }
  );

  useEffect(() => {
    isFetch();
  }, []);

  return (
    <Box>
      <Box className={s['photo-block']}>
        <SkeletonComp
          isLoad={isLoad}
          component={() => (
            <div className={s.mount}>
              <img src={Photo} className={s.photo} />
            </div>
          )}
        />
      </Box>

      <Box>
        <Typography> Vasya Pupkin </Typography>
        <Typography> VP Fancy Admin </Typography>
      </Box>
    </Box>
  );
};

export default UserBlock;
