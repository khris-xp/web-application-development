import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', color: 'gold', margin: '50px' }}>
          โหวตอาหาร
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <Card
              category='อาหารคาว'
              name='ข้าวผัด'
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              image='https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg'
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Card
              category='อาหารหวาน'
              name='ไอศกรีม'
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              image='https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg'
            />
          </div>
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  state = {
    vote: 0,
  };

  handleVote = (count) => {
    if (this.state.vote === 10 && count === 1) {
      alert('Cannot vote more');
      return;
    }

    if (this.state.vote === 0 && count === -1) {
      alert('Cannot unvote');
      return;
    }

    this.setState({ vote: this.state.vote + count });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'blanchedalmond',
          border: '3px solid black',
          borderRadius: '1rem',
          maxWidth: '750px',
          padding: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div>
            <h2>{this.props.category}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.info}</p>
          </div>
          <div
            style={{
              minWidth: '250px',
            }}
          >
            <img
              src={this.props.image}
              alt={this.props.name}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <VoteButton vote={this.handleVote} />
          <VoteBox vote={this.state.vote} />
          <UnVoteButton vote={this.handleVote} />
        </div>
      </div>
    );
  }
}

class VoteButton extends React.Component {
  handleVoteClick = () => {
    this.props.vote(1);
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleVoteClick}
          style={{
            padding: '0.3rem',
          }}
        >
          Click to Vote
        </button>
      </div>
    );
  }
}

class UnVoteButton extends React.Component {
  handleUnVoteClick = () => {
    this.props.vote(-1);
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleUnVoteClick}
          style={{
            padding: '0.3rem',
          }}
        >
          Click to Unvote
        </button>
      </div>
    );
  }
}

class VoteBox extends React.Component {
  render() {
    return (
      <h2
        style={{
          backgroundColor: '#3be833',
          color: 'purple',
          border: '2px solid black',
          padding: '0.5rem',
          margin: '0',
          borderRadius: '0.5rem',
        }}
      >
        {this.props.vote === 0
          ? 'MIN'
          : this.props.vote === 10
          ? 'MAX'
          : this.props.vote}
      </h2>
    );
  }
}

export default App;
