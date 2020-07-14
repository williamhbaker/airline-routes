import React from 'react';
import propTypes from 'prop-types';

function PageLink(props) {
  return (
    <li>
      <button style={{background: 'white'}}
        className={`pagination-link ${props.current ? 'is-current' : ''} ${props.hidden ? 'is-hidden' : ''}`}
        data-page={props.num}
        onClick={props.handler}
      >
        {props.num}
      </button>
    </li>
  );
}

PageLink.propTypes = {
  num: propTypes.number.isRequired,
  handler: propTypes.func.isRequired,
  hidden: propTypes.bool.isRequired,
  current: propTypes.bool.isRequired,
};

function firstPart(props) {
  const prevPage = props.currentPage - 1;

  if (props.currentPage > 1) return (
    <>
      <PageLink
        num={1}
        handler={props.onPageClick}
        hidden={false}
        current={false}
      />
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <PageLink
        num={prevPage}
        handler={props.onPageClick}
        hidden={props.currentPage <= 2}
        current={false}
      />
    </>
  );
}

function lastPart(props) {
  const nextPage = props.currentPage + 1;

  if (props.currentPage < props.maxPages) return (
    <>
      <PageLink
        num={nextPage}
        handler={props.onPageClick}
        hidden={props.currentPage >= (props.maxPages - 1)}
        current={false}
      />
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <PageLink
        num={props.maxPages}
        handler={props.onPageClick}
        hidden={false}
        current={false}
      />
    </>
  );
}

function Paginator(props) {
  return (
    <nav className="pagination is-centered" role="navigation">
      <button style={{background: 'white'}} onClick={props.onPageClick} data-page={props.currentPage - 1} className={`pagination-previous ${props.currentPage > 1 ? '' : 'is-hidden'}`}>Previous</button>
      <button style={{background: 'white'}} onClick={props.onPageClick} data-page={props.currentPage + 1} className={`pagination-next ${props.currentPage < props.maxPages ? '' : 'is-hidden'}`}>Next page</button>
      <ul className="pagination-list">
        {firstPart(props)}
        <li className="pagination-link is-current">{props.currentPage}</li>
        {lastPart(props)}
      </ul>
    </nav>
  );
}

Paginator.propTypes = {
  currentPage: propTypes.number.isRequired,
  maxPages: propTypes.number.isRequired,
  onPageClick: propTypes.func.isRequired,
};

export default Paginator;