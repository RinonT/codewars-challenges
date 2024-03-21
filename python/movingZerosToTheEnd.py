def move_zeros(lst):
    allZeros = [item for item in lst if item == 0]
    restOfItems = [item for item in lst if item != 0]
    return restOfItems + allZeros