package keeper

import (
	"github.com/harish551/planet/x/planet/types"
)

var _ types.QueryServer = Keeper{}
