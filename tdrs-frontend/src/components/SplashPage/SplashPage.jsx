import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import loginLogo from '../../assets/login-gov-logo.svg'
import Button from '../Button'

function SplashPage() {
  const authenticated = useSelector((state) => state.auth.authenticated)
  const authLoading = useSelector((state) => state.auth.loading)

  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/login/oidc`
  }

  if (authenticated) {
    return <Redirect to="/edit-profile" />
  }

  if (authLoading) {
    return null
  }

  return (
    <>
      <section className="usa-hero" aria-label="Introduction">
        <div className="grid-container">
          <div className="usa-hero__callout">
            <h1 className="usa-hero__heading">
              <span className="usa-hero__heading--alt font-serif-2xl margin-bottom-5">
                Sign into TANF Data Portal
              </span>
            </h1>
            <p className="text-black margin-bottom-5">
              Our vision is to build a new, secure, web based data reporting
              system to improve the federal reporting experience for TANF
              grantees and federal staff. The new system will allow grantees to
              easily submit accurate data and be confident that they have
              fulfilled their reporting requirements.
            </p>
            <Button
              className="width-full sign-in-button"
              type="button"
              onClick={handleClick}
            >
              <div className="mobile:margin-x-auto mobile-lg:margin-0">
                Sign in with{' '}
              </div>
              <img
                className="mobile:margin-x-auto mobile:padding-top-1 mobile-lg:margin-0 mobile-lg:padding-top-0 width-15 padding-left-1"
                src={loginLogo}
                alt="Login.gov"
              />
              <span className="visually-hidden">Opens in a new website</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="resources-header font-heading-2xl margin-top-0 tablet:margin-bottom-0">
              Featured TANF Resources
            </h2>
            <div className="resource-info__secondary">
              <p>Questions about TANF data?</p>
              <p>
                Email:{' '}
                <a className="usa-link" href="mailto: tanfdata@acf.hhs.gov">
                  tanfdata@acf.hhs.gov
                </a>
              </p>
            </div>
          </div>
          <div className="tablet:grid-col-8">
            <ul className="usa-card-group grid-col-12">
              <li className="usa-card tablet:grid-col-4 mobile-lg:grid-col-12 resource-card">
                <div className="usa-card__container">
                  <header className="usa-card__header">
                    <h3 className="usa-card__heading">Resource 1</h3>
                  </header>
                </div>
              </li>
              <li className="usa-card tablet:grid-col-4 mobile-lg:grid-col-12 resource-card">
                <div className="usa-card__container">
                  <header className="usa-card__header">
                    <h3 className="usa-card__heading">Resource 1</h3>
                  </header>
                </div>
              </li>
              <li className="usa-card tablet:grid-col-4 mobile-lg:grid-col-12 resource-card">
                <div className="usa-card__container">
                  <header className="usa-card__header">
                    <h3 className="usa-card__heading">Resource 1</h3>
                  </header>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default SplashPage
