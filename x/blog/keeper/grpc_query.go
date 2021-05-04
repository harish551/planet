package keeper

import (
	"github.com/harish551/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
