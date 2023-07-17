import { Outlet, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { TOKENS } from '../constants';
import { GetStorage } from '../../infra/cache';

const PrivateRoutes: React.FC = () => {

        // get the token
        const access_token = GetStorage(TOKENS.ACCESS_TOKEN);       

  return access_token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
