import pytest

from core.models import Tweet


@pytest.fixture
def list_tweets_response(client):
    return client.get('/api/list_tweets')


def test_status_code(list_tweets_response):
    assert list_tweets_response.status_code


def test_list_tweets(list_tweets_response):
    tweets_list = list_tweets_response.json()
    for tweet in tweets_list:
        tweet.pop('id')
    assert tweets_list == [
        {
            'author_name': 'Zé Ninguém',
            'author_username': '@zeninguem',
            'author_avatar': 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            'created_at': '43min',
            'text': 'Eu sou do povo, eu sou um Zé ninguém'
        }
    ]
