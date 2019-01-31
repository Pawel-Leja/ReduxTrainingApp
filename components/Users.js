import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Users extends Component {

    // While mounting this component, it will fetch the user data by fetchUsers action
    componentWillMount() {
        this.props.fetchUsers();
    }

    render() {
        // Creates an array of elements for each user found in the store
        const userItems = this.props.users.map(user => (
            <View key={user.login} style={styles.userBar}>
                <View style={styles.line} />
                <Text>User name: {user.name}</Text>
                <Text>User age: {user.age}</Text>
            </View>
        ));
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', }}>USERS</Text>
                {userItems}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    container: {
        marginTop: 20
    },
    userBar: {
        marginVertical: 5,
        marginHorizontal: 20
    }
});

// Sets proptypes for the component
Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    newUser: PropTypes.object
}

// Maps store state to the component props
mapStateToProps = state => ({
    users: state.users.items,
    newUser: state.users.item
});

export default connect(mapStateToProps, { fetchUsers })(Users);