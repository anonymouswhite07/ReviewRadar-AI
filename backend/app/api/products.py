from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_products():
    return {"message": "List products"}

@router.post("/search")
async def search_product(query: str):
    return {"message": "Search products"}
