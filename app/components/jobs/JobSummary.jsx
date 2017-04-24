import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Paper from 'material-ui/Paper';

import StructuredElement from 'elements/StructuredElement';
import Constants from 'Constants';

import rowStyles from 'components/RowLayout.less';
import styles from './JobSummary.less';

const JobSummary = createReactClass({
    displayName: 'JobSummary',

    propTypes: {
        job: PropTypes.object.isRequired,
        filtered: PropTypes.bool
    },

    getDefaultProps() {
        return {
            filtered: false
        };
    },

    renderHeader() {
        return (
            <div className={classnames(styles.header)}>
                <div>
                    <span className={styles.joblabel}>Job ID:</span>
                    <Link to={`${Constants.URL.JOB}/${this.props.job.jid}`}>{this.props.job.jid}</Link>
                </div>
            </div>
        );
    },

    renderBody() {
        return (
            <div>
                <StructuredElement
                    downloadEnabled
                    collapsedKeys={['return']}
                    data={this.props.job}/>
            </div>
            );
    },

    render() {
        return (
            <Paper className={classnames(rowStyles.this, styles.this, { filtered: this.props.filtered })} zDepth={2}>
                {this.renderHeader()}
                {this.renderBody()}
            </Paper>
        );
    }
});

export default JobSummary;
