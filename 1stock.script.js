// This script automatically rebalances a stock portfolio to keep an equal amount
// invested in every stock, and a certain percentage in cash. It requires significant
// moves in order to make transactions, in order to minimize commission fees.

symbols = ["ECP", "MGCP", "BLD", "CLRK", "OMTK", "FSIG", "KGI", "FLCM", "STM", "DCOMM", "HLS", "VITA", "ICRS", "UNV", "AERO", "OMN", "SLRS", "GPH", "NVMD", "WDS", "LXO", "RHOC", "APHE", "SYSC", "CTK", "NTLK", "OMGA", "FNS", "SGC", "JGN", "CTYS", "MDYN", "TITN"];
investQuantity = 0.9;
rebalanceThreshold = 0.1;

while (true)
{
    prices = [];
    shares = [];
    
    print("Getting positions..."); 
    totalCost = 0;
    for (i = 0; i < symbols.length; i = i+1)
    {
        position = getStockPosition(symbols[i]);
        shares.push(position[0]);
        totalCost += position[0] * position[1];
    }
    
    print("Getting initial prices...");
    for (i = 0; i < symbols.length; i = i+1)
        prices.push(getStockPrice(symbols[i]));
         
    cash = getServerMoneyAvailable("home");
    netWorth = cash;
    
    for (i = 0; i < symbols.length; i = i+1)
        netWorth += prices[i] * shares[i];
    
    // Keep a certain amount in cash, and invest the rest
    targetStock = (netWorth * investQuantity) / symbols.length;
    
    moneyDisp = netWorth;
    suffix = "";
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "k";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "m";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "b";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "t";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qa";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qt";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "se";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "st";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "o";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "n";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "d";
    }
    
    print("Net worth: $" + (Math.round(100 * moneyDisp) / 100) + suffix);
    
    moneyDisp = totalCost;
    suffix = "";
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "k";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "m";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "b";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "t";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qa";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qt";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "se";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "st";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "o";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "n";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "d";
    }
    
    print("Total cost of shares: $" + (Math.round(100 * moneyDisp) / 100) + suffix);
    
    moneyDisp = netWorth - cash - totalCost;
    suffix = "";
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "k";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "m";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "b";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "t";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qa";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qt";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "se";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "st";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "o";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "n";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "d";
    }
    
    earningsPrint = "Earnings: $" + (Math.round(100 * moneyDisp) / 100) + suffix;
    if (totalCost > 0)
        earningsPrint += " (" + (Math.round(10 * 100 * (((netWorth - cash) / totalCost) - 1)) / 10) + "%)";
    print(earningsPrint);
    
    moneyDisp = targetStock;
    suffix = "";
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "k";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "m";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "b";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "t";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qa";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "qt";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "se";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "st";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "o";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "n";
    }
    if (moneyDisp >= 1000)
    {
        moneyDisp /= 1000;
        suffix = "d";
    }
    
    print("Target stock holdings: $" + (Math.round(100 * moneyDisp) / 100) + suffix);
    
    for (i = 0; i < symbols.length; i = i+1)
    {
        // Get the price again to avoid script delay errors
        price = getStockPrice(symbols[i]);
        holdings = price * shares[i];
        diff = Math.floor((targetStock - holdings) / price) * price;
        
        // Because of the $100k commissions, we only want to trade if it's a differential of
        // $10m or more, and also 10% to avoid too much jitter.
        if (diff > 10000000 && (holdings === 0 || targetStock / holdings >= (1 + rebalanceThreshold)))
            buyStock(symbols[i], diff / price);
        else if (diff < -10000000 && targetStock / holdings <= (1 - rebalanceThreshold))
            sellStock(symbols[i], -diff / price);
    }
}