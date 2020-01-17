use itertools:
import itertools

m = ['user1', 'user2']
k = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
}

for i,j in zip(itertools.cycle(m), k):
    print(i,j)