import api.state as state
from ariadne import MutationType

mutation = MutationType()

@mutation.field("call")
def resolve_call(_, info):
    state.num_calls += 1
    return state.num_calls