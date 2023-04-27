import Box from '@mui/material/Box';
import s from './index.module.scss';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoader } from '../../../../6-Entities/Common/model/hooks';
import SetAlert from '../../../../7-Shared/lib/SetAlert';
import SkeletonComp from '../../../../7-Shared/lib/Skeleton';
import Photo from './../../../../7-Shared/data/mocks/data/img/photo.jpg';
import { useThemeState } from '../../../../6-Entities/Common/model/store';
import getColors from '../../../../7-Shared/lib/GetColors';
import Skeleton from '@mui/material/Skeleton';

interface IUserBlock {}

const UserBlock: React.FC<IUserBlock> = (props) => {
  const token = useThemeState((state) => state.token);
  const colors = getColors(token);
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
    <Box p={2} className={s.user}>
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
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
          {isLoad ? <Skeleton /> : 'Vasya Pupkin'}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          {isLoad ? <Skeleton /> : 'VP Fancy Admin'}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserBlock;
