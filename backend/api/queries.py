import api.state as state
from ariadne import QueryType

query = QueryType()

@query.field("num_calls")
def resolve_num_calls(_, info):
    return state.num_calls