import { FunctionalComponent, h, render, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/profile">
                    Me
                </Link>
                <Link activeClassName={style.active} href="/profile/john">
                    John
                </Link>
            </nav>
            <ul><Foo /></ul>
        </header>
    );
};

const Foo: Record<string, string> = () => <Fragment><div>foo!!!</div></Fragment>;

export default Header;
