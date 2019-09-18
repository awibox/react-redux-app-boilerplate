import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from 'components/Header/Header';
import styles from 'styles/container.scss';

// Pages
import HomeContainer from 'pages/Home/Home';
import ReposContainer from "pages/Repos/Repos";
import AuthorContainer from "pages/Author/Author";

export default (
    <Router>
        <div className="app">
            <Header />
            <main className={styles.content}>
                <div className={styles.wrapper}>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/repos" component={ReposContainer} />
                    <Route path="/author" component={AuthorContainer} />
                </div>
            </main>
        </div>
    </Router>
);
