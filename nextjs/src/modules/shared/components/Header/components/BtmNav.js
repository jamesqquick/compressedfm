import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useUser } from '@auth0/nextjs-auth0/client';
import client from 'utils/client';
import { GuestQuery, sponsorQuery } from 'queries/Queries';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const BtmNav = () => {
  const { user } = useUser();
  const [isSponsor, setIsSponsor] = useState(false);
  const [sponsorSlug, setSponsorSlug] = useState();
  const [isGuest, setIsGuest] = useState(false);

  const router = useRouter();

  // strip the slash out of the pathname so that I can use it as a className
  const currentPage = router.asPath.replace('/', '');

  // GET THE USER'S ROLES
  useEffect(() => {
    const getUserStatus = async () => {
      // TODO: can move these to a provider of some sort
      if (user && user.email) {
        const sponsor = await client.fetch(sponsorQuery, {
          email: user.email,
        });
        const guest = await client.fetch(GuestQuery, {
          email: user.email,
        });
        setSponsorSlug(sponsor.slug.current);
        setIsSponsor(!!sponsor);
        setIsGuest(!!guest);
      }
    };
    getUserStatus();
  }, [user]);

  return (
    <StyledBtmNav>
      <ul className={currentPage || 'home'}>
        {/* <li className="press-kit">
          <Link href="/press-kit">
            Press Kit
          </Link>
        </li> */}
        {/* {!isSponsor && (
          <li className="sponsoring">
            <Link href="/sponsoring">
              Sponsoring
            </Link>
          </li>
        )} */}

        {isSponsor && (
          <li className="sponsor-dashboard">
            <Link href={`/dashboard/sponsors/${sponsorSlug}`}>Dashboard</Link>
          </li>
        )}

        {isGuest && (
          <li className="guest-dashboard">
            <Link href="/dashboard/guests">Dashboard</Link>
          </li>
        )}

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <li className="login">
          {user ? <Link href="/api/auth/logout">Logout</Link> : <Link href="/api/auth/login">Login</Link>}
        </li>
      </ul>
    </StyledBtmNav>
  );
};

export { BtmNav };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledBtmNav = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 2.4rem;
      font-weight: ${(props) => props.theme.fontMedium};
      line-height: 2;
    }

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.yellow};
      }
    }

    /* set styles for the current page */
    &.press-kit li.press-kit a,
    &.sponsoring li.sponsoring a,
    &.login li.login a {
      color: ${(props) => props.theme.yellow};
    }
  }
`;
