/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton, BigSignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { TopSignOutButton } from './TopSignOutButton';

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
        <div class="pre-header">
        <div class="container-fluid">
            <div class="flex-cont1">
            <a>qld.gov.au</a>
            </div>
            <div class="flex-cont2">
            <a class="btn">Support</a>
                    {isAuthenticated ? <TopSignOutButton /> : <></>}
            </div>
        </div>

        </div>
        <header>
            <div class="container-fluid">
                <div class="brand">
                    <span>Prospector</span>
                </div>
            </div>
        </header>

        <nav class="main">
            <div class="container-fluid">
                <ul>
                <li>Home</li>
                {isAuthenticated ? <>
                    <li>Add Data</li>
                    <li>Projects</li>
                    <li>Search</li>
                    <li>Settings</li></> : <>
                    </>}
                <li>About</li>
                </ul>
            </div>
        </nav>

        <div class="content">
            <div class="container-fluid">
                <div class="sidebar">
                    
                    {isAuthenticated ? <>
                        <div class="rounded-shaded">
                        <h5>Dashboard Tools</h5>
                        <label>Project</label><br /><input /><br /><br /><button>Submit</button>
                        </div>
                    </> : <>
                        <h5>Experiment Authentication</h5>
                        <p>This demonstrates authentcation using Microsoft Entra ID. </p>
                        </>}
                    
                </div>

            <div class="innerContainer">
                <h5>Welcome to Prospector, The Georesources Intelligence tool for logging information about projects around Queensland.
                </h5>
                <br />
                {isAuthenticated ? <>{props.children}</> : <>
                <div class="rounded-shaded">
                <h3>Sign in:</h3>
                <p>Log in to Prospector using your QLD Government ID. You will be redirected to the QLD Government Single Sign On.</p>
                <center>
                <BigSignInButton />
                </center>
                <p></p>
            </div> </> }
            <br />
            <br />
    
    </div>
    </div>
    </div>
    <footer>
        <div class="container-fluid">
            Footer here
        </div>
    </footer>
        </>
    );
};
